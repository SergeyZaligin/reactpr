## Setting naming css class

<pre>
yarn eject and add webpack.cong prod and dev
require.resolve("style-loader"),
{
  loader: require.resolve("css-loader"),
  options: {
    importLoaders: 1,
    <strong>modules: true,  </strong>
    <strong>localIdentName: "[name]__[local]--[hash:base64:5]"</strong>
  }
},
</pre>
