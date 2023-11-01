const url = '127.0.0.1:5173'
export async function createUser(creds) {
    console.log(creds);
    const res = await fetch(`${url}/receive`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await res.json();
  
    if (!res.ok) {
      // eslint-disable-next-line
      throw {
        message: data.message,
        statusText: res.statusText,
        status: res.status,
      };
    }
  
    return data;
  }