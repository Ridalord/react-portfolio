import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
