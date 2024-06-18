import './styles/global.scss';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.content}>
      <h1 className="text-yellow-400">Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
