# Privacy Policy for DataSeed - Test Data Generator
---
**Effective Date**: 26 November 2025
**Last Updated**: 26 November 2025

---

## Introduction
DataSeed ("we", "our", or "the extension") is a Chrome browser extension that helps developers and testers generate test data quickly using static generators, custom templates, and AI-powered generation. This privacy policy explains how DataSeed handles your data.


## Data Collection and Storage

### What Data We Collect

DataSeed stores the following data **locally on your device only**:

1. **Extension Settings**:
   - AI provider preferences (OpenAI, Gemini, DeepSeek, Ollama)
   - API keys for AI providers (if you choose to use cloud AI)
   - Model selections
   - Theme preferences (light/dark mode)
   - Token limits and other configuration options

2. **Custom Data**:
   - Custom data templates you create in the Custom panel
   - Labels, values, and tags you assign to custom templates

3. **User Preferences**:
   - Last-used AI provider
   - Last-used form field selections (AI Auto Fill)
   - UI state (selected tabs, etc.)


### What We DON'T Collect

- We do NOT collect any personal information
- We do NOT track your browsing history
- We do NOT collect analytics or usage statistics
- We do NOT send your data to our servers (we don't have any servers)
- We do NOT share your data with third parties (except AI providers you explicitly configure)


## How Your Data Is Stored

All data is stored using Chrome's `chrome.storage.local` API, which means:

- Data stays on your device
- Data is not synchronized across devices
- Data is only accessible to the extension
- Data is deleted if you uninstall the extension

**We do not have access to your stored data. It never leaves your computer unless you send requests to AI providers.**


## Third-Party Services

### AI Providers (Optional)

If you choose to use AI features, you can configure one or more of these third-party AI providers:

1. **OpenAI** (https://openai.com)
   - You provide your own API key
   - Data sent: Your prompts for data generation
   - OpenAI's Privacy Policy: https://openai.com/policies/privacy-policy

2. **Google Gemini** (https://ai.google.dev)
   - You provide your own API key
   - Data sent: Your prompts for data generation
   - Google's Privacy Policy: https://policies.google.com/privacy

3. **DeepSeek** (https://www.deepseek.com)
   - You provide your own API key
   - Data sent: Your prompts for data generation
   - DeepSeek's Privacy Policy: https://chat.deepseek.com/downloads/DeepSeek%20Privacy%20Policy.html

4. **Ollama** (Local AI)
   - Runs entirely on your computer
   - No data sent to external servers
   - No API key required

**Important**: When you use AI features, the prompts you generate (e.g., "generate a person name" or form field data) are sent to the AI provider you select. Please review their privacy policies to understand how they handle your data.

---

## Permissions Explained

DataSeed requests the following browser permissions:

### 1. **Storage**
- **Purpose**: To save your settings, API keys, and custom data locally
- **Data Access**: Only data you create within the extension

### 2. **Active Tab**
- **Purpose**: To scan and fill forms on the current page (AI Auto Fill feature only)
- **When Active**: ONLY when you explicitly click "Scan Form" or "Generate & Fill" in the AI Auto Fill tab
- **Data Access**: Only reads visible form field labels and types from the current page
- **What We Do**: Read visible form field labels and types, fill them with generated data
- **Important**: DataSeed does NOT run on all websites automatically. The extension only accesses page content when you actively use the AI Auto Fill feature.

### 3. **Scripting**
- **Purpose**: To dynamically inject the content script ONLY when AI Auto Fill is used
- **When Active**: ONLY injected into the current tab when you click "Scan Form" or "Generate & Fill"
- **Data Access**: No data collected, only used to interact with form fields on the current page
- **Important**: Unlike many extensions, DataSeed does NOT automatically inject scripts into every website you visit. Scripts are only injected on-demand when you explicitly use the AI Auto Fill feature.

### 4. **Host Permissions**
- **ai.openai.com**: To send requests to OpenAI API (if configured)
- **generativelanguage.googleapis.com**: To send requests to Gemini API (if configured)
- **api.deepseek.com**: To send requests to DeepSeek API (if configured)
- **localhost / 127.0.0.1**: To communicate with local Ollama installation (if used)

---

## Data Security

### API Keys
- API keys are displayed as masked (password-type) fields in the settings UI with an eye icon toggle to reveal them
- API keys are stored in Chrome's local storage (chrome.storage.local)
- Storage is isolated to the extension and not accessible by websites or other extensions
- Keys are never logged or transmitted except to the respective AI provider
- Keys are only used when you explicitly trigger AI generation
- **Note**: Keys are stored in plaintext within Chrome's extension storage (standard practice for browser extensions)

### User Data
- Custom data templates are stored in plain text locally
- **Warning**: We display a notice in the UI advising not to store sensitive information (passwords, real credit card numbers, etc.)

### Form Filling
- AI Auto Fill only accesses visible, fillable form fields
- Hidden fields, buttons, and disabled fields are excluded
- No form data is sent to our servers (we have none)

---

## Your Rights and Choices

You have complete control over your data:

### Access Your Data
- All settings accessible via the extension's Options page
- Custom data visible in the Custom panel

### Delete Your Data
- Clear custom data: Delete individual items in the Custom panel
- Clear all settings: Uninstall the extension
- Clear API keys: Remove them from Settings

### Opt-Out of AI Features
- AI features are entirely optional
- You can use static and custom generators without any AI

### Choose Your AI Provider
- Select which provider to use (or none)
- Use local Ollama for complete privacy
- Switch providers at any time

---

## Children's Privacy

DataSeed is intended for developers and testers. We do not knowingly collect data from children under 13. If you are under 13, please do not use this extension.

---

## Changes to This Policy

We may update this privacy policy from time to time. Changes will be indicated by updating the "Last Updated" date at the top. Continued use of the extension after changes constitutes acceptance of the updated policy.

---

## Data Retention

- Data is stored indefinitely until you delete it or uninstall the extension
- No automatic data deletion or expiration
- All data deleted upon extension uninstall

---

## International Users

DataSeed is a client-side extension that does not collect or transmit data to our servers. If you use cloud AI providers:
- OpenAI: Data may be processed in the United States
- Gemini: Data may be processed by Google globally
- DeepSeek: Data is processed in the People's Republic of China (DeepSeek servers are located in China)
- Ollama: Data stays on your local computer

---

## Contact Information

If you have questions about this privacy policy or how DataSeed handles data:

- **Email**: vaikar.abhijeet@gmail.com
- **Developer**: Abhijeet Vaikar

---

## Compliance

### GDPR (EU Users)
- We do not collect personal data
- No data processing agreements needed (no servers)
- Data stored locally under your control
- Right to erasure: Uninstall extension

### CCPA (California Users)
- We do not sell your personal information
- We do not collect personal information
- No opt-out needed (no collection)

---

## Summary (TL;DR)

- All data stored locally on your device
- No tracking, analytics, or data collection by us
- AI features are optional and use YOUR API keys
- You control all your data
- Uninstalling deletes everything


**This privacy policy applies only to the DataSeed browser extension. Third-party AI providers have their own privacy policies.**


## Changelog

- **26 November 2025**: Initial privacy policy for v1.0.0