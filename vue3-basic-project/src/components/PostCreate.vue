<template>
  <div class="row g-3">
    <div class="col col-2">
      <select 
        class="form-select mb-2"
        aria-label="Default select example"
        v-model="newPost.type"
      >
        <option selected>Open this select menu</option>
        <option value="news">뉴스</option>
        <option value="notice">알림</option>
      </select>
    </div>
    <div class="col col-8">
      <input class="form-control mb-2" v-model="newPost.title">
    </div>
    <div class="col col-2 d-grid">
      <!-- <button class="btn btn-primary mb-2" @click="$emit('createPost')"> -->
      <button class="btn btn-primary mb-2" @click="createPost">
        추가
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: {
    createPost: newPost => {
      if(!newPost.title) {
        return false;
      } else if(!newPost.type) {
        return false;
      }
      return true;
    }
  },

  setup(props, context) {
    const type = ref('news');
    const title = ref('');
    
    const newPost = {
      type: type.value,
      title: title.value
    };

    const createPost = () => {
      context.emit('createPost', newPost);
      type.value = 'news';
      title.value = '';
    }
    return { createPost, title, type, newPost };
  }
}
</script>

<style lang="scss" scoped>

</style>