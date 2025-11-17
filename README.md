# What is the use of the `keyof` keyword in TypeScript? Provide an example

## keyof কীওয়ার্ড কি?
keyof- `একটি "চাবির গোছা"` এর মতো - যে কোনো অবজেক্টের সমস্ত চাবি `(keys/properties)` একসাথে সংগ্রহ করে রাখে।
## মূল ধারণা:
- `কীগুলি নিরাপদে সংগ্রহ:` যখন  keyof ব্যবহার করা হয়, TypeScript automatically একটি অবজেক্টের সমস্ত বৈধ   property এর নামের তালিকা তৈরি করে
- `ভুল প্রবেশাধিকার রোধ:` এটি নিশ্চিত করে যে শুধুমাত্র সঠিক এবং বিদ্যমান প্রপার্টিগুলিতেই অ্যাক্সেস পাচ্ছে
- `গতিশীল কিন্তু নিরাপদ কোড:` dynamically property access করার সময়ও টাইপ সেফটি বজায় রাখে
## Door and Key analogy:
- `Interface/Type` = একটি বিল্ডিং এর Blueprint
- `Properties` = বিল্ডিং-এর বিভিন্ন দরজা
- `keyof` = সেই বিল্ডিং-এর সমস্ত দরজার চাবির সেট
## বাস্তব জীবনের উদাহরণ:
- `Form Validation:`
যখন  একটি user registration form তৈরি করা হয়, প্রতিটি field-এর নাম জানা গুরুত্বপূর্ণ। `keyof` নিশ্চিত করে যে শুধুমাত্র বিদ্যমান field names ব্যবহার করা হচ্ছে।
- `Database Query:`
ডাটাবেস টেবিলের column names-এর সাথে কাজ করার সময়, keyof guarantee করে যে  শুধুমাত্র সঠিক column names ব্যবহার করা হচ্ছে।
## keyof-এর সুবিধা:
- `Compile-time safety:`
TypeScript compiler ভুল Property নাম ব্যবহার করলে immediately error দেয় - runtime error-এর প্রয়োজন হয় না
- `Auto completion support:` 
 IDE (VS Code, WebStorm) automatically suggest করে valid property names
- `Refactoring friendly:` 
যদি  interface change হয়, keyof automatically update হবে - পুরানো code automatically invalid হবে
## Example
```bash
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
 }

// keyof User = "id" | "name" | "email" | "age"
type UserKeys = keyof User;

// Valid keys
const key1: UserKeys = "id";
const key2: UserKeys = "name";
const key3: UserKeys = "email";

// Invalid key - TypeScript error
const key4: UserKeys = "address"; // Error: '"address"' is not assignable to type 'keyof User'

```


# What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.

## Enum কি?
`Enum` হলো TypeScript-এর একটি বিশেষ ফিচার যা related constant values-এর একটি named collection তৈরি করে। এটি basically একটি `group of named constants`.
`Enum` TypeScript-এর একটি powerful feature যা codebase-এ `structure`, `readability`, এবং `type safety` add করতে পারে, কিন্তু সঠিক `use case`-এ ব্যবহার করতে হয়.
## Enum-এর প্রকারভেদ:
`Numeric Enum (default):`
```bash
enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}
```
`String Enum:`
```bash
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
```

`Heterogeneous Enum (মিশ্র):`
```bash
enum Response {
    No = 0,
    Yes = "YES"
}
```

## Enum-এর সুবিধা:
- Readability বৃদ্ধি
- Type Safety
- Auto-completion Support

## Modern Alternatives:
`As Const Objects:`

```bash
const SIZE = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
} as const;

type Size = typeof SIZE[keyof typeof SIZE];
```

`Union Types:`

```bash
type Status = "pending" | "approved" | "rejected";
type UserRole = "admin" | "user" | "guest";
```

## Summary:
`Use enum when:`
- Runtime-এ values needed
- Reverse mapping needed
- Numeric constants needed
- Better autocomplete wanted

`Use Union Types when:`
- শুধুমাত্র compile-time safety needed
- Simplicity preferred
- Bundle size concerned


