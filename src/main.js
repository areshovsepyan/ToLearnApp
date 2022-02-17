import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const store = createStore({
  state() {
    return {
      resources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue JS documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google it!',
          link: 'https://google.com',
        },
      ],
    };
  },
});
const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.use(store);
app.mount('#app');

