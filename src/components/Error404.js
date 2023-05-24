import React from 'react'

function Error404() {
  return (
    <div className='error-page'>
      <div className='flex'>
        <div className='error-msg'>
          <h2>Ooops!</h2>
          <p>Error 404: Page not Found</p>
        </div>
        <div className='error-image'>
          <figure>
            <img src='https://static.wikia.nocookie.net/final-space/images/5/50/Tumblr_inline_p7d3vv4v6O1ribwd2_500.jpg/revision/latest?cb=20180506113909' alt='Error404' />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Error404