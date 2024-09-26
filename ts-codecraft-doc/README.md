# `ts-codecraft`

**`ts-codecraft`** is a powerful TypeScript utility library that simplifies your development workflow by providing a comprehensive collection of reusable, high-performance, and well-tested utility functions. These functions cover a broad range of common operations, reducing the need to reinvent the wheel and letting you focus on building amazing applications.

## 🚀 Features

- **Wide Variety of Utilities**: Includes functions for time manipulation, formatting, storage handling, debouncing, and more.
- **Typed with TypeScript**: Fully typed with TypeScript for an optimized developer experience.
- **Plug-and-Play**: Designed for both Node.js and browser environments.
- **Zero Dependencies**: Lightweight and fast with zero external dependencies.
- **Cloud-Ready Utilities**: Integrates with common cloud platforms (e.g., IndexedDB, Cookies, Storage Buckets, Cache Storage).

## 📦 Installation

Install `ts-codecraft` in your project with npm or yarn:

```bash
npm install ts-codecraft
# or
yarn add ts-codecraft
```

## 🛠️ Usage

To use `ts-codecraft` in your project, simply import the utilities you need:

```typescript
import { debounce, formatDate, uploadFile } from 'ts-codecraft';

// Example usage: Debouncing a function
const logMessage = () => console.log('Hello, World!');
const debouncedLog = debounce(logMessage, 300);
debouncedLog();  // Call as needed, only logs once every 300ms
```

## 📚 Available Utilities

### 1. **Time Utilities**

- `formatDate`: Formats dates into custom string formats.
- `getTimeAgo`: Calculate relative time from a given date.
- `getTimeDifference`: Get the difference between two times in human-readable format.
- `convertTimeTo24Hour`: Converts a normal time format into 24-hour time (e.g., `14:30:00`).

#### Example:

```typescript
import { formatDate } from 'ts-codecraft';

const formattedDate = formatDate(new Date(), 'yyyy-MM-dd');
console.log(formattedDate); // Output: 2024-09-25
```

---

### 2. **Debounce & Throttle**

- `debounce`: Delays invoking a function until after a wait time has elapsed.
- `throttle`: Ensures a function is only called once in a set time interval.

#### Example:

```typescript
import { debounce } from 'ts-codecraft';

const handleClick = () => console.log('Button clicked!');
const debouncedClick = debounce(handleClick, 500);
debouncedClick();  // Only triggers if there are no clicks within 500ms
```

---

### 3. **Storage Utilities**

- `setLocalStorage`, `getLocalStorage`, `removeLocalStorage`: Manage browser's `localStorage` with ease.
- `setSessionStorage`, `getSessionStorage`, `removeSessionStorage`: Manage browser's `sessionStorage`.
- `setCookie`, `getCookie`, `removeCookie`: Simplify cookie management.
- `openIndexedDB`, `addToIndexedDB`, `getFromIndexedDB`: Easy integration with IndexedDB for structured data storage.

#### Example:

```typescript
import { setLocalStorage, getLocalStorage } from 'ts-codecraft';

// Set data to localStorage
setLocalStorage('username', 'JohnDoe');

// Retrieve data from localStorage
const user = getLocalStorage('username');
console.log(user);  // Output: JohnDoe
```

---

### 4. **Cloud Storage Utilities**

- `uploadFile`, `downloadFile`, `deleteFile`: Interact with cloud storage (S3, GCP, etc.) for file operations.
- `generateSignedUrl`: Generate a signed URL for secure file access.
- `fileExists`: Check if a file exists in the cloud bucket.

#### Example:

```typescript
import { uploadFile } from 'ts-codecraft';

// Example: Upload file to cloud storage (e.g., Google Cloud Storage)
uploadFile(myBucket, myFile, 'uploads/profile.jpg').then((url) => {
  console.log('File uploaded at: ', url);
});
```

---

### 5. **IndexedDB Utilities**

- `openIndexedDB`: Open a database in IndexedDB.
- `addToIndexedDB`: Add data to IndexedDB.
- `getFromIndexedDB`: Retrieve data from IndexedDB.

#### Example:

```typescript
import { openIndexedDB, addToIndexedDB } from 'ts-codecraft';

openIndexedDB('MyDatabase', 1, ['store1']).then((db) => {
  addToIndexedDB(db, 'store1', { id: 1, name: 'Item 1' });
});
```

---

### 6. **Cache Storage Utilities**

- `cacheData`: Store data in the browser's Cache Storage.
- `getCachedData`: Retrieve data from Cache Storage.
- `deleteCachedData`: Remove data from Cache Storage.

---

### 7. **Utilities for Storage Buckets**

- `uploadFile`, `downloadFile`, `listFiles`, `deleteFile`, `generateSignedUrl`: Interact with cloud-based storage services like S3, Firebase Storage, Google Cloud Storage.

---

## ✨ Examples

Here are some common examples of how to use the `ts-codecraft` library in your project.

### Debouncing a Search Input:

```typescript
import { debounce } from 'ts-codecraft';

const searchInput = document.getElementById('search');
const handleSearch = debounce(() => {
  console.log('Search query:', searchInput.value);
}, 300);

searchInput.addEventListener('input', handleSearch);
```

### Formatting Dates:

```typescript
import { formatDate } from 'ts-codecraft';

const date = new Date();
console.log(formatDate(date, 'yyyy/MM/dd'));  // Output: 2024/09/25
```

---

## 🔧 Contribution

We welcome contributions! Feel free to open issues or submit pull requests to improve `ts-codecraft`. Check out our [CONTRIBUTING.md](link-to-contributing-guide) for more details.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👏 Acknowledgements

Special thanks to all the open-source contributors and the community for helping make this project possible!

---

By providing a clean and comprehensive API for common utility operations, `ts-codecraft` is here to make your TypeScript development experience faster and smoother!

---

## 🤝 Let's Connect

If you enjoy using `ts-codecraft`, consider giving it a ⭐ on GitHub! For any questions or feedback, reach out to [email@example.com](mailto:email@example.com).

---

This README covers everything your users will need, from installation, examples, and function explanations to usage guidance and contribution details. It presents `ts-codecraft` as a polished, professional, and well-thought-out package!