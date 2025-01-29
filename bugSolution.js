```javascript
// MyComponent.jsx

function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">My Component</h1>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Button 1
        </button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
          Button 2
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
```