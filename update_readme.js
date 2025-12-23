#!/usr/bin/env node

// Script to update README.md for PowerTrack-API repo
// Scans docs/ folders and generates TOC from .md file titles

const fs = require('fs');
const path = require('path');

const DOCS_DIR = 'docs';
const README_FILE = 'README.md';

function extractEndpointFromMD(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.startsWith('# ')) {
        return line.substring(2).trim(); // Remove '# '
      }
    }
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
  }
  return null;
}

function generateTOC() {
  const methods = ['GET', 'POST', 'PUT', 'DELETE'];
  const toc = { GET: [], POST: [], PUT: [], DELETE: [], Hardware: [], Alerts: [] };

  // Standard methods
  for (const method of methods) {
    const methodDir = path.join(DOCS_DIR, method);
    if (!fs.existsSync(methodDir)) continue;

    const files = fs.readdirSync(methodDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const filePath = path.join(methodDir, file);
      const endpoint = extractEndpointFromMD(filePath);
      if (endpoint) {
        toc[method].push({ endpoint, file: `${method}/${file}` });
      }
    }
    toc[method].sort((a, b) => a.endpoint.localeCompare(b.endpoint));
  }

  // Hardware and Alerts
  ['Hardware', 'Alerts'].forEach(category => {
    const categoryDir = path.join(DOCS_DIR, category);
    if (!fs.existsSync(categoryDir)) return;

    const typeDirs = fs.readdirSync(categoryDir).filter(d => fs.statSync(path.join(categoryDir, d)).isDirectory());
    typeDirs.forEach(typeDir => {
      const typePath = path.join(categoryDir, typeDir);
      const files = fs.readdirSync(typePath).filter(f => f.endsWith('.md'));
      files.forEach(file => {
        const filePath = path.join(typePath, file);
        const endpoint = extractEndpointFromMD(filePath);
        if (endpoint) {
            const typeName = typeDir.replace('Unknown_', 'Unknown ');
          // Extract method from filename (e.g., GET_)
          const methodMatch = file.match(/^(GET|POST|PUT|DELETE)_/);
          const method = methodMatch ? methodMatch[1] : 'UNKNOWN';
          toc[category].push({ endpoint: `${endpoint} (${typeName}, ${method})`, file: `${category}/${typeDir}/${file}` });
        }
      });
    });
    toc[category].sort((a, b) => a.endpoint.localeCompare(b.endpoint));
  });

  return toc;
}

function generateREADME(toc) {
  const totalEndpoints = Object.values(toc).reduce((sum, arr) => sum + arr.length, 0);

  let content = `# PowerTrack API Documentation

This repository contains automatically generated documentation for the AlsoEnergy PowerTrack Web API endpoints. The documentation is derived from intercepted API calls during browser usage and is intended for use with a client wrapper that handles authentication via session cookies.

**Important Notes:**
- This documentation is not related to AlsoEnergy's official SOAP or REST APIs.
- It documents the internal JSON-based endpoints used by the PowerTrack web application.
- Authentication must be handled via browser session cookies (AE-S, AE-V, etc.).
- Endpoints may change without notice as they are internal to the web app.

## Table of Contents

`;

  const methods = ['GET', 'POST', 'PUT', 'DELETE'];
  for (const method of methods) {
    if (toc[method].length > 0) {
      content += `### ${method} Endpoints\n`;
      toc[method].forEach(item => {
        content += `- [${item.endpoint}](${DOCS_DIR}/${item.file})\n`;
      });
      content += '\n';
    }
  }

  // Hardware and Alerts
  ['Hardware', 'Alerts'].forEach(category => {
    if (toc[category].length > 0) {
      content += `### ${category}\n`;
      toc[category].forEach(item => {
        content += `- [${item.endpoint}](${DOCS_DIR}/${item.file})\n`;
      });
      content += '\n';
    }
  });

  content += `## Generation Details
- Generated: ${new Date().toISOString().split('T')[0]}
- Total Endpoints: ${totalEndpoints}
- Source: Browser-intercepted API calls from PowerTrack web application
- Tool: Custom extension for AlsoEnergy PowerTrack API documentation

## Usage
These endpoints require valid session authentication via cookies. Use a browser automation tool or custom client that maintains session state with AlsoEnergy's PowerTrack application.
`;

  return content;
}

function main() {
  console.log('Generating README.md...');
  const toc = generateTOC();
  const readmeContent = generateREADME(toc);
  fs.writeFileSync(README_FILE, readmeContent);
  console.log('README.md updated successfully!');
}

if (require.main === module) {
  main();
}