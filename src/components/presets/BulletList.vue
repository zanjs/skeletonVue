<script>
  import VueSkeleton from '../VueSkeleton.vue';

  export default {
    components: {
      VueSkeleton,
    },

    props: {
      rows: {
        default: 5,
        type: Number,
      },
    },

    computed: {
      height () {
        return this.rows * 21;
      },
    },

    methods: {
      getYPos (row, plus) {
        return plus + ((row - 1) * 22);
      },
    },
  };
</script>

<template>
  <vue-skeleton v-bind="$attrs" :width="130" :height="height">
    <template v-for="i in rows">
      <circle :key="i + '_c'" cx="8" :cy="getYPos(i, 8)" r="8"  />
      <rect :key="i + '_r'" x="22" :y="getYPos(i, 3)" rx="3" ry="3" width="200" height="9" />
    </template>
  </vue-skeleton>
</template>
