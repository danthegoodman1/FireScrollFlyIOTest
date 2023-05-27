async function main() {
  while (true) {
    await Promise.all([
      fetch("http://149.248.210.123/records/get", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "Records": [
            {
              "pk": "pk1",
              "sk": "sk1"
            }
          ]
        })
      }),
      fetch("http://149.248.210.123/records/get", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "Records": [
            {
              "pk": "pk1",
              "sk": "sk1"
            }
          ]
        })
      }),
      fetch("http://149.248.210.123/records/get", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "Records": [
            {
              "pk": "pk1",
              "sk": "sk1"
            }
          ]
        })
      }),
      fetch("http://149.248.210.123/records/get", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "Records": [
            {
              "pk": "pk1",
              "sk": "sk1"
            }
          ]
        })
      }),
      fetch("http://149.248.210.123/records/get", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "Records": [
            {
              "pk": "pk1",
              "sk": "sk1"
            }
          ]
        })
      }),
      fetch("http://149.248.210.123/records/get", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "Records": [
            {
              "pk": "pk1",
              "sk": "sk1"
            }
          ]
        })
      })
    ])
    console.log("did 6")
  }
}

main()
