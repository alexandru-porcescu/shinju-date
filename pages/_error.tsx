import Error from 'next/error'
import Head from 'next/head'
import React from 'react'

export default class extends Error {
  render() {
    const { statusCode } = this.props
    const title = process.env.ANIMARE_SEARCH_TITLE || 'Search'

    return (
      <>
        <Head>
          <title>エラー! - ${title}</title>
        </Head>

        <div className="error">
          <h2 className="error__title">{statusCode}</h2>
        </div>

        <style jsx>{`
          .error {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: center;
          }

          .error__title {
            color: #212121;
            font-size: 5rem;
            font-weight: 700;
          }
        `}</style>
      </>
    )
  }
}