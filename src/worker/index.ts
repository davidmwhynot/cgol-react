// import * as Comlink from 'comlink';
// import type * as api from './api';

// /* eslint-disable import/no-webpack-loader-syntax */
// import Worker from 'worker-loader!./worker';

// const worker = new Worker();

// export default Comlink.wrap<typeof api>(worker);

import * as api from './api';

export default api;
