// webpack의 기본 구성옵션 설정, 직접 해줘야함
// detail한 설정으로 규모있는 프로젝트에서 유용하게 쓰임

// import
// node.js에 있는 전용 모듈 'path'이동
// const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정 ex) parcel main.js(index.html)
  entry: './js/main.js',
  
  // 결과물(bundle)을 반환하는 설정
  output: {
    // 절대경로로 설정해야함, __dirname: 현재 파일이있는 그 경로를 지칭하는 변수
    // 기본적으로 path는 작성 안해도 dist로 들어감
    // path: path.resolve(__dirname, 'public'), 
    // filename: 'app.js',
    // 기존 내용 지우고 시작
    clean: true
  },

  module: {
    rules: [
      {
        // .css라는 확장자로 끝나는 것을 찾는 정규식, ?는 s가 있을수도 있다
        test: /\.s?css$/, 
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]

  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins : [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      // dist로 집어넣음
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}