1- I spend like 4-5 hours on completing this task since I made the UI not very complex, I was focused more on adding functionality.
2 - In React 18, there's an awesome feature called Automatic Batching. It makes your app faster by grouping together changes you make to the page, so it only updates once at the end. This helps avoid unnecessary updates and keeps things running smoothly.
```
    // Earlier React version without Automatic Batching
function App() {
  const handleClick = () => {
    // State modification 1
    setCount(count + 1);
    // State modification 2
    setName('New Name');
    // State modification 3
    setFlag(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// In React 18 with Automatic Batching concept
function App() {
  const handleClick = () => {
    // Grouped state modifications
    setCount(count + 1);
    setName('New Name');
    setFlag(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

```
3 - I have no great experience in doing so, but I do know some methods like implementing A/B testing to compare the performance of different code versions in a production-like environment, also I did a course on devOps and the culture or the concept showcase good practice for monitoring, also I will try to Collaborate with team members, including backend developers, database administrators, and DevOps engineers, and try to examine database queries for slow-performing queries and try optimizing those queries.

4-I will add redux for managing state, for editing task card, and for some several different functionality also, actually it was a little bit lengthy procedure for editing without using redux or (context and reduce hooks) and I used basic logic to implement as i not used any database just used localstorage, also I will try to add some database like mongoDB, firestore/firebase etc, i can also make UI more interesting and classy but there was not enough time to made cool UI