import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//testy2

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// git filter-branch --env-filter '
// OLD_EMAIL="="
// CORRECT_NAME="randleem"
// CORRECT_EMAIL="erandle2211@gmail.com"
// if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
// then
//     export GIT_COMMITTER_NAME="$CORRECT_NAME"
//     export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
// fi
// if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
// then
//     export GIT_AUTHOR_NAME="$CORRECT_NAME"
//     export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
// fi
// ' --tag-name-filter cat -- --branches --tags

// git filter-branch --env-filter 'if [ "$GIT_AUTHOR_EMAIL" = "=" ]; then
//      GIT_AUTHOR_EMAIL="erandle2211@gmail.com";
//      GIT_AUTHOR_NAME="randleem";
//      GIT_COMMITTER_EMAIL=$GIT_AUTHOR_EMAIL;
//      GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"; fi' -- --all



// git filter-branch --commit-filter '
//         if [ "$GIT_COMMITTER_NAME" = "<Old Name>" ];
//         then
//                 GIT_COMMITTER_NAME="<New Name>";
//                 GIT_AUTHOR_NAME="<New Name>";
//                 GIT_COMMITTER_EMAIL="<New Email>";
//                 GIT_AUTHOR_EMAIL="<New Email>";
//                 git commit-tree "$@";
//         else
//                 git commit-tree "$@";
//         fi' HEAD


