<template>
  <div>
    <h2> {{ student.name }} </h2>
    <h3>강의가 있습니까?</h3>
    <p>{{ hasStudy }}</p>
    <p>{{ existStudy() }}</p>
    <p>이름: {{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup () {
    const student = reactive({
      name: 'happy',
      study: ['html', 'css', 'javascript']
    })

    // 반응형이 한번씩 갱신될 때마다 캐싱 -> 성능 면에서 좋음
    const hasStudy = computed(() => {
      return student.study.length > 0 ? '있음' : '없음'
    })

    const existStudy = () => {
      return student.study.length > 0 ? '있음' : '없음'
    }

    const firstName = ref('홍')
    const lastName = ref('길동')

    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      // 데이터를 변경해야할 경우 setter를 만듦
      set(value) {
        [firstName.value, lastName.value] = value.split(' ')
      }
    })

    // 기존 속성을 새로 덮어씀
    fullName.value = '임 꺽정'
    return {
      student,
      hasStudy,
      existStudy,
      fullName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>