async function apiPost(url, data) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const ans = await res.json();
        
        return ans;
    } catch (err) {
        console.log(err);
    }
}

async function apiGet(url) {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const ans = await res.json();
        
        return ans;
    } catch (err) {
        console.log(err);
    }
}
  
async function apiDelete(url, data) {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const answer = await res.json();
  
      return answer;
    } catch (err) {
      console.log(err);
    }
}
  
async function apiPut(url, data) {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const answer = await res.json();
  
      return answer;
    } catch (err) {
      console.log(err);
    }
  }
  
  async function apiPatch(url, data) {
    try {
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const answer = await res.json();
  
      return answer;
    } catch (err) {
      console.log(err);
    }
  }
  
export { apiPost, apiGet, apiPut, apiPatch, apiDelete };