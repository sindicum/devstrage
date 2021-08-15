<template>
  <div>
    <table>
        <tr>
          <th>分類</th>
          <th>イベント名</th><th>概要</th>
        </tr>
        <tr>
          <th>フォーム</th>
          <td>focus</td><td>要素にフォーカスが入ったとき</td>
        </tr>
        <tr>
          <th>フォーム</th>
          <td>blur</td><td>要素からフォーカスが外れたとき</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    row: Int,
    column: Int,
    
  }
}
</script>

<style scoped>
</style>