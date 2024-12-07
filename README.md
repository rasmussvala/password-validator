# react-native-password-validator

A customizable React Native component for evaluating and displaying password strength. It provides password recommendations, dynamic status indicators, and support for password confirmation with visual feedback.

![password-validator-demo-2x](https://github.com/user-attachments/assets/96df59e8-643a-4596-9d42-d4461ecca943)

## Installation

```sh
npm install react-native-password-validator
```

## Features

- Dynamically evaluates the strength of a password, in the rage 0 to 1, based on configurable rules (length, uppercase, special characters, and numbers).
- Modify strength bar colors, warning colors.
- Shows user-friendly recommendations for creating strong passwords.
- Includes an optional confirm-password field to ensure password consistency.
- A visual indicator that adapts to the strength of the entered password.
- Mobile-friendly design with adjustable styles.

## Usage

Below is an example of how to use the PasswordValidator component in your project. This example demonstrates how to configure the component with various options, such as minimum password length, character requirements, and the callback for password strength changes.

```typescript
const App = () => {
  const handleStrengthChange = (strength: number) => {
    if (strength === 1) {
      // Password is strong. Do something.
    }
  };

  const handlePasswordChange = (password: string) => {
    console.log("Current password:", password);
    // Handle password input.
  };

  const handleEqualPasswords = (isEqual: boolean) => {
    if(isEqual) {
        // Both passwords are the same in both inputs. Do something.
    }
  }

  return (
    <PasswordValidator
      nrOfChars={8}
      hasAtLeastOneUpperCase={true}
      hasAtLeastOneSpecialChar={true}
      hasAtLeastOneNumber={true}
      confirmPassword={true}
      onStrengthChange={handleStrengthChange}
      onPasswordChange={handlePasswordChange}
      isEqualPasswords={handleEqualPasswords}
      showRecomendations={true}
      colorPalette={{
        firstColor: "#ffcccc",
        secondColor: "#ffe066",
        thirdColor: "#9bf6ff",
        forthColor: "#2a9d8f",
        warning: "#e76f51",
      }}
      strengthText={["Weak", "Okay", "Good", "Strong"]}
    />
  );
};

export default App;
```

## Props

| Name                       | Type       | Default Value                        | Description                                                                                  | Optional |
| -------------------------- | ---------- | ------------------------------------ | -------------------------------------------------------------------------------------------- | -------- |
| `nrOfChars`                | `number`   | `8`                                  | Minimum number of characters for a strong password.                                          | Yes      |
| `hasAtLeastOneUpperCase`   | `boolean`  | `true`                               | Whether the password must include at least one uppercase letter.                             | Yes      |
| `hasAtLeastOneSpecialChar` | `boolean`  | `true`                               | Whether the password must include at least one special character.                            | Yes      |
| `hasAtLeastOneNumber`      | `boolean`  | `true`                               | Whether the password must include at least one number.                                       | Yes      |
| `confirmPassword`          | `boolean`  | `true`                               | Whether to include the confirm password input field and its functionality.                   | Yes      |
| `onStrengthChange`         | `function` |                                      | Callback triggered when the password strength changes. Return a strength number between 0-1. | Yes      |
| `isEqualPasswords`         | `function` |                                      | Callback returning a boolean indicating whether the passwords match.                         | Yes      |
| `onPasswordChange`         | `function` |                                      | Callback triggered whenever the password changes. Returns the current password string.       | Yes      |
| `showRecomendations`       | `boolean`  | `true`                               | Whether to display password recommendations to the user.                                     | Yes      |
| `colorPalette`             | `object`   |                                      | Custom color palette for styling various components.                                         | Yes      |
| `colorPalette.firstColor`  | `string`   | `#e76f51`                            | Color for the weakest strength level.                                                        | Yes      |
| `colorPalette.secondColor` | `string`   | `#f4a261`                            | Color for the low strength level.                                                            | Yes      |
| `colorPalette.thirdColor`  | `string`   | `#bbce60`                            | Color for the medium strength level.                                                         | Yes      |
| `colorPalette.forthColor`  | `string`   | `#2a9d8f`                            | Color for the strongest strength level.                                                      | Yes      |
| `colorPalette.warning`     | `string`   | `#e76f5177`                          | Color for warnings (e.g., mismatched passwords).                                             | Yes      |
| `strengthText`             | `string[]` | `["Weak", "Okay", "Good", "Strong"]` | Custom labels for strength levels (array of exactly 4 strings).                              | Yes      |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
