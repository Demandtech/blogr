import React from 'react'
import './future.css'
import editorImg from  '../../assets/images/illustration-editor-desktop.svg'

const futureData = {
  header: 'Designed for the future',
  futureContent: [
    {
      contentHeader: 'Robust content management',
      contentPara:
        'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
    },
    {
      contentHeader: 'Introducing an extensible editor',
      contentPara:
        'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.',
    },
  ],
}

function Future() {
  return (
    <section className='future'>
      <div className='container'>
        <div className='future-header'>
          <h2>{futureData.header}</h2>
        </div>
        <div className='future-wrapper'>
          <div className='left'>
            {futureData.futureContent.map((content, index) => {
              const { contentHeader, contentPara } = content
              return (
                <article key={index} className='left-content'>
                  <h3>{contentHeader}</h3>
                  <p>{contentPara}</p>
                </article>
              )
            })}
          </div>
          <div className='right'>
            <div className='right-wrapper'>
               <img src={editorImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Future
