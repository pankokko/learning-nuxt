 <template>
 <div>
     <input @change="fileSelect" type="file" name="file">
     <button @click="upload" type="submit">送信</button>
 </div>
 </template>

 <script>
    export default {
        name: "TestView",
        data: function () {
            return {
                selected_file: null
            }
        },
        methods: {
            //ファイル選択時の処理
            fileSelect: function(e) {
                //選択したファイルの情報を取得しプロパティにいれる
                this.selected_file = e.target.files[0];
            },
            //送信処理
            upload: function() {
                //formDataをnewする
                let formData = new FormData();
                //appendでデータを追加(第一引数は任意のキー)
                //他に送信したいデータがある場合にはその分appendする
                formData.append('file', this.selected_file);
                console.log(formData)
                // let config = {
                //     headers: {
                //         'content-type': 'multipart/form-data'
                //     }
                // };

                this.$axios.post('/product', formData)
                    .then(function(response) {
                        console.log('成功')
                    })
                    .catch(function(error) {
                        console.log('失敗')
                    })
            }
        }
    }
</script>