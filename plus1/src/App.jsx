import { useState } from "react"

function App() {

  const [a, set_a] = useState(0)
  const [z, set_z] = useState(0)

  function plus1()
  {
    console.log("버튼 눌렸어")
    let b = a + 1
    set_a(b)

  }

    function h1()
  {
    alert('홍길동 반가워')
  }

      function h2()
  {    
      console.log("버튼 눌렸어")
      let c = z + 2
      set_z(c)
  }

  return (
    <>
    <button onClick={plus1}>현재상태 : {a}</button>
<br /><br />
    <button onClick={h1}>나지적</button>
<br /><br />
    <button onClick={h2}>현재상태 : {z}</button>
    </>
  )
}

export default App
