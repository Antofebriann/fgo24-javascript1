const data = [
    [ 
      0,
      [ 
        1, 
        2, 
        3,
        { 
          string: [
            { value: "world" },
            { value: "hello" } 
          ]
        }
      ]
    ]
  ];
  
  console.log(data[0][1][3].string[1].value); 
  