import createContext from './create-context.js';

const { consumer, Provider } = createContext('store');

export { consumer, Provider };

customElements.define('store-provider', Provider);