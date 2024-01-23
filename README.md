**Package Name:** `react-mentions-input-latest`

**Description:**
Create custom chat-like input boxes in React with the ability to mention or tag users, resembling Google Chat features.

Note: Need any feature or something not working? please raise an issue

![Example Image](https://res.cloudinary.com/practicaldev/image/fetch/s--YNW9U88i--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8qh4l4pagpzqqdki8kwh.png)

![Sample Image 2](https://res.cloudinary.com/practicaldev/image/fetch/s--8P-UtDyr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/beqr06y07wxxqxdpvt5d.png)

**Installation:**

```js
npm i react-mentions-input-latest
```

**Usage Example**

```js
import MentionsInput from "react-mentions-input-latest";

// Usage in your component
<MentionsInput data={UsersList} trigger="@" />;
```

**UsersList Structure:**

```js
const UsersList = [
  {
    id: 235075,
    name: "Your Name",
    userAvatar: "https://cdn.example.com/avatar.jpg",
  },
  // Add more users as needed
];
```

Note: Customize the trigger property to set the symbol for mentioning users (e.g., "@" or "#").
