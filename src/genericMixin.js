


const lib = {
    InitializeMixin: {
      methods: {
        queryRest: async function (url, method = 'get', params = null, data = null) {
            var headers = { 'Content-Type': 'application/json' }
            var toSend = {
                baseURL: 'https://whispering-crag-07172.herokuapp.com/', 
                url: url,
                method: method,
                params: params,
                data: data,
                headers: headers,
            }
              return this.$http.request(toSend).then((response)=>{
              return response.data
            }).catch((error)=>{  
              console.log(error)
            })
        },
        request: async function (resource, method= 'get', params, data) {
          return (await this.queryRest( resource, method, params, data))
        },
      }
    }
  }
  
  export default lib
  