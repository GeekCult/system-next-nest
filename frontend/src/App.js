import { useState, useEffect, useContext } from "react";
import { ReactReduxContext, connect } from 'react-redux';
import Index from "./components/Index";
import axios from 'axios';

function App() {
  const { store } = useContext(ReactReduxContext)
  const id = localStorage.getItem('id');
  const [isLoggedIn, setLoggedIn ] = useState((id !== null && id !== '') ? true : false);

  useEffect(() => {
    async function fetchData() {

        const token = localStorage.getItem('token');

        if(token !== '' && (id !== null && id !== '')) {
          try{
            await axios.get(`http://127.0.0.1:3002/user/${id}`, {
                headers: ({
                    Authorization: 'Bearer ' + token
                })
            }).then(function(response){
            
                if(Number(response.data.id) === Number(id)){
                  setLoggedIn(true)
                  store.dispatch({type: 'firstname', payload: response.data.firstName})
                  store.dispatch({type: 'lastname', payload: response.data.lastName})
                }else{
                  setLoggedIn(false)
                }
            });
          } catch (error) {
            setLoggedIn(false)
            localStorage.setItem('id', '');
            console.log(error.message)
          }   
        }
    }
    fetchData();
  }, [id, store]);

  return (
    <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>

  );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    //rotateAction: (payload) => dispatch(rotateAction(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
