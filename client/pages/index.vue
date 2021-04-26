<template>
  <div class="container">
    <a-carousel arrows dots-class="slick-dots slick-thumb" autoplay>
      <!-- <a slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props)" />
      </a> -->
      <div v-for="item in 4" :key="item">
        <img
          class="carouselImage"
          :src="'http://g.auroraone.top/image/' + item + '.jpg'"
        />
      </div>
    </a-carousel>
    <vs-row class="card">
      <vs-col
        v-for="(col, index) in 6"
        :key="index"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="4"
      >
        <vs-card>
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img
              src="http://g.auroraone.top/image/000714-1619107634fc6c.jpg"
              alt=""
            />
          </template>
          <template #text>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class="bx bx-chat"></i>
              <span class="span"> 54 </span>
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: 'http://g.auroraone.top/image/',
    }
  },
  methods: {
    getImgUrl(page) {
      return `${this.baseUrl}${++page.i}.jpg`
    },
  },
}
</script>

<style scoped>
.container {
  padding: 0 200px;
}
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  /* filter: grayscale(100%); */
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.carouselImage {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.card {
  margin-top: 50px;
}
</style>
