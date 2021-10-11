import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { Suspense } from "react";
import React from "react";

function App() {
  const token = useSelector(state=>state.auth.token)
  const admin = useSelector(state=>state.auth.admin)
  let islogin = false;
  if(token!=null){
    islogin=true
  }
  const Index = React.lazy(() => import('./pages/Index'));
  const Login = React.lazy(() => import('./pages/Login'));
  const Product = React.lazy(()=>import('./pages/Product'));
  const Sales= React.lazy(()=>import('./pages/Sales'));
  const EditProduct = React.lazy(()=>import('./pages/EditProduct'));
  return (
    <>
    <Suspense fallback={
      <LoadingSpinner/>
    }>
      <Switch>
        <Route path='/' exact>
          {!islogin&&<Redirect to='/login'></Redirect>}
          {admin&&<Redirect to='/product'></Redirect>}
          <Index/>
        </Route>
        <Route path="/login" exact>
          {islogin&&<Redirect to='/'></Redirect>}
          <Login/>
        </Route>
        <Route path="/product" exact>
          {!admin&&<Redirect to='/login'></Redirect>}
          <Product/>
        </Route>
        <Route path="/sales" exact>
          {!islogin&&<Redirect to='/login'></Redirect>}
          <Sales/>
        </Route>
        <Route path="/product/:productId">
          {!islogin&&<Redirect to='/login'></Redirect>}
          <EditProduct/>
        </Route>
        <Route path="*">
          <div>Not found</div>
        </Route>
      </Switch>
    </Suspense>
   </>
  );
}

export default App;
