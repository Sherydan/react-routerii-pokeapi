import React from 'react'
import InvalidUrlImg from '../assets/img/invalid-url-img.jpg'

const InvalidUrl = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      flexDirection: 'column'

    }}>
      <h1>Invalid Url</h1>
      <img style={{
        height: '50%',
      }} src={InvalidUrlImg} alt="" />
    </div>
  )
}

export default InvalidUrl