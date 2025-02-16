//@ts-nocheck
import { Suspense, useEffect } from 'react';
import './index.scss';
import Routes from 'app/Routing';
import PageLoader from 'shared/ui/PageLoader';
import {
  createAsyncThunk,
  createSlice,
  current,
  nanoid
} from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
const initialState = { count: 0, posts: [], status: 'idle' };
const RESOURCE_URL = 'https://jsonplaceholder.typicode.com/posts_ik';
const fetchPosts = createAsyncThunk(
  'users/fetchPosts',
  async (postId, thunkApi) => {
    console.log(thunkApi, 'thunk api');
    try {
      thunkApi.abort();
      const data = await fetch(RESOURCE_URL + '/' + postId);
      if (data.status === 404) {
        throw new Error('error');
      }
      return await data.json();
    } catch (err) {
      return thunkApi.rejectWithValue({
        message: err.message
      });
    }
  },
  {
    condition(arg, api) {
      const { counter } = api.getState();
      if (counter.count === 0) {
        // return false;
      }
    }
  }
);

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
      console.log('log', current(state));
      console.log(JSON.stringify(state), 'stringify');
      return state;
    },
    decrement(state) {
      // return (state -= 1);
    },
    reset(state) {
      // return (state = 0);
    },
    incrementByAmount: (state, action: { type: string; payload: number }) => {
      // return (state += action.payload);
    },
    incrementByAmountTest: {
      reducer(state, action) {
        // console.log(current(state), 'value ===>>', action);
        state.count += action.payload.count;
        state.id = action.payload.id;
      },
      prepare(value) {
        return { payload: { id: nanoid(), count: value } };
      }
    }
  },
  extraReducers(builder) {
    //will need a add cancel or check condition property
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // console.log(current(state), 'state ===>>');
      // console.log(action, 'action');
      state.status = 'success';
      state.posts.push(action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error;
    });
  }
});
const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  incrementByAmountTest
} = counterSlice.actions;
const selectPost = (state) => state.counter.posts;
const App = () => {
  const count = useSelector((state: any) => state.counter.count);
  const posts = useSelector(selectPost);
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchData = async () => {
    //   dispatch(fetchPosts(1));
    //   // console.log(promise, 'promise');
    // };
    // fetchData();
  }, []);
  const obj = {
    name: 'John',
    nickName: 'Sure',
    age: 27,
    get name() {},
    set name(value) {
      return `${this.name} ${(this.age += value)}`;
    }
  };
  Object.defineProperty(obj, 'nickName', {
    writable: false
  });
  obj.name = 5;
  // proxy
  let target = {};
  let proxy = new Proxy(target, {}); // empty handler

  proxy.test = 5; // writing to proxy (1)
  // console.log(target); // 5, the property appeared in target!

  // console.log(proxy); // 5, we can read it from proxy too (2)

  let numbers = [0, 48, 87];
  numbers = new Proxy(numbers, {
    // get(numbers, prop) {
    //   if (prop in numbers) {
    //     return numbers[prop];
    //   }
    //   return 'What is it';
    // },
    set(numbers, prop, value) {
      if (typeof value === 'number') {
        numbers[prop] = value;
        return true;
      }
      return false;
    }
  });
  numbers.push(10);
  // console.log(numbers, 'numbers');
  let labels = { _id: 1 };
  labels = new Proxy(labels, {
    deleteProperty(target, property) {
      if (property.toString().startsWith('_')) {
        throw new Error('non accessible prop');
      }
    }
  });
  // delete labels._id;
  return (
    <div>
      {/* <div style={{ width: '500px', height: '500px', background: 'white' }}>
        <button
          style={{ padding: '14px' }}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          style={{ padding: '14px' }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button style={{ padding: '14px' }} onClick={() => dispatch(reset())}>
          reset
        </button>
        <button
          style={{ padding: '14px' }}
          onClick={() => dispatch(incrementByAmountTest(5))}
        >
          incrementByAmount
        </button>
        <p
          style={{
            width: '120px',
            margin: '24px',
            fontSize: '20px'
          }}
        >
          {count}
        </p>
      </div> */}
      <Suspense fallback={<PageLoader />}>
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
