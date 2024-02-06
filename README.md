# Shopaisley Web Frontend

## Developer Information

A. Clone the repository with the following commands (authentication is required).
1. git clone https://github.com/Shopaisley/shopaisley_frontend.git
2. Mount your resulting local app-backend directory on your IDE (e.g. VS Code)
3. Run npm install to fetch requisite node modules dependencies
4. To run, see the Running the app section below.

B. Create a branch for your development or preview, preferably named in line with what you're doing. E.g.,
1. git checkout -b grading-assignment

C. When done locally, stage files and commit locally with befitting comment and then push the branch with -set-upstream option enabled. E.g.,
1. git add --all
2. git commit -m 'Implemented A Grade'
3. git push –set-upstream origin grading-assignment

D. Make a Pull request on GitHub for your pushed branch to be reviewed and then eventually merged

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the shoppers project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

You should see the landing page for Shopaisley web application\

In the shoppers project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5174](http://localhost:5174) to view it in the browser.

You should see the dashboard for sellers for Shopaisley web application\

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





# Stack
- Node js (v.16 + )
- Typescript
- React
- Next
- ChakraUI


### css writing
-> Styled component -> chakra styled system

### api call
-> createAsyncThunk from redux-js/toolkit || use SWR (create custom Hook to avoid code repetition)

### global state system
-> @Reduxjs/toolkit

```

### react structure
```
example:
src/pages/home.tsx
src/component/ --components/home/Title.tsx --components/home/Message.tsx --components/home/utils.ts --components/home/atom.ts
```

# style guide

## **Typescript**

- using **interface** rather than **type**

    ```tsx
    //good
    interface ProductCardProps {
      img: string;
      title: string;
      name: string;
      price: string;
      tags: Array<string>;
    };
    
    //bad 
    type ProductCardProps = {
    ...
    }
    
    ```


- using `baseUrl` importing module( no need to dot drilling)

    ```tsx
    //good
    import { Container } from "styles/layout";
    
    //bad
    import { Container } from "../../../styles/layout";
    
    //only use relative path with the current file
    //or child of current file
    import { Container } from "./layout";
    ```


## React

- Consistency: for **<the real function(not related with react component>** **use regular function instead of arrow function**

    ```tsx
    //good
    export default function const Dashboard(){
        return <p>its hoem</p>
    }
    
    //bad
    const Dashboard = ()=> {
        return <p>its hoem</p>
    }
    
    ```

- Consistency: for **<the react component>** **use arrow function  instead of regular function**

    ```tsx
    //good
    const sumNumber = (a,b)=> {
        return a+b
    }
    
    //bad
    function sumNumber(a,b){
        return a+b
    }
    ```


- Don`t forget to use key for the iteration component
- watch out using index as a key

  [https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)


```tsx
//when map data has its own unique id
{
  todos?.map((todo) => (
    <Todo {...todo} key={todo.id} />
  ));
}

//no unique id on data

import { nanoid } from 'nanoid';
...
const todosData = todos?.map((todo)=> {
   return {id:nanoid(), ...todo}
})
...
{
  todosData?.map((todo) => (
    <Todo {...todo} key={nanoid()} />
  ));
}

// only case when you can use index as a key
// 1. the list and items are static–they are not computed and do not change;
// 2. the items in the list have no ids;
// 3. the list is never reordered or filtered.
// When all of them are met, you may safely use the index as a key.

{
  todosData?.map((todo, index) => (
    <Todo {...todo} key={index} />
  ));
}

```

- **Memo**

Use memo for child components, this will avoid child component re-rendering when the parent component state/props are updated by using this method component will only be re-rendered when it’s props are changed.

- **Component**

Always use functional components until unless you really need component lifecycle methods.

- **Functional component custom hooks**

Try to use react built-in and your custom hooks where possible, like useCallback,useEffect e.t.c. avoid using React.UseCallback, React.useMemo and the likes, And only call hooks at the top level don’t use them inside look or conditions.


