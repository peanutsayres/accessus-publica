import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://accessuspublica.com',
  integrations: [tailwind()],
});
```

**Save the file.**

---

## Step 3: Create GitHub Actions Workflow

### **Create folder structure:**

In your project root, you need to create:
```
.github/
  └── workflows/
      └── deploy.yml