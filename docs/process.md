1. use vue [cdn](https://unpkg.com/vue@next)

2. create vue app with `Vue.createApp()`

3. add data()->return object
    ```javascript
    Vue.createApp({
        data(){
            return { }
        }
    })
    ```
4. mount app
    ``` 
    App.mount('#app_id') 
    ```
5. display data - using `{{ property }}`
6. *One Way* bind data using  `v-bind:src="data_name"`  or, `:src="data_name"`

7. contitional logics: `v-if="logic"` , `v-else`, `v-show="logic"`

8. *Two way data binding* : `v-model`