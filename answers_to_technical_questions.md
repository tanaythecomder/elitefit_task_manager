1- I spend like 4-5 hours on completing this task since I made the UI not very complex, I focused more on adding functionality.
2 - In the most recent version of React (React 18), a groundbreaking feature called Automatic Batching has been introduced. Automatic Batching o ptimizes the rendering process by grouping together all state modifications made using event handlers, preventing unnecessary rendering steps.
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
3 - I have no great experience in doing so, but I do some methods like implementing A/B testing to compare the performance of different code versions in a production-like environment, also I did a course on devOps so I will try to Collaborate with team members, including backend developers, database administrators, and DevOps engineers, and try to examine database queries for slow-performing queries and try optimizing those queries.

4-I will add redux for managing state, for editing task card, and for some several different functionality also, actually it was a little bit lengthy procedure for editing without using redux or (context and reduce hooks) and I used basic logic to implement as i not used any database just used localstorage, also I will try to add some database like mongoDB, firestore/firebase etc, i can also make UI more interesting and classy but there was not enough time to made cool UI