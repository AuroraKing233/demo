<template>
  <div class="container">
    <div class="main">
      <div v-swiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in 4" :key="index" class="swiper-slide">
            <img
              class="image"
              :src="'http://g.auroraone.top/image/' + ++item + '.jpg'"
              alt=""
            />
          </div>
        </div>
        <!-- <div slot="pagination" class="swiper-pagination"></div> -->
      </div>
      <div class="column">
        <div class="title">
          <i class="bx bx-message-alt-detail icon"></i><span>文章</span>
        </div>
      </div>
      <div class="card">
        <div v-for="(item, index) in blogList" :key="index" class="item">
          <vs-card>
            <template #title>
              <h3>{{ item.title }}</h3>
            </template>
            <template #img>
              <img :src="item.baseUrl" />
            </template>
            <template #text>
              <p>{{ item.summary }}</p>
            </template>
            <template #interactions>
              <vs-button danger icon @click="onLike(item)">
                <i
                  class="bx"
                  :class="
                    item.isLike ? 'bxs-heart scale-up-center' : 'bx-heart'
                  "
                ></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> {{ item.likeSum }} </span>
              </vs-button>
            </template>
          </vs-card>
        </div>
      </div>
      <div class="column">
        <div class="title">
          <i class="bx bx-message-alt-detail icon"></i><span>视频</span>
        </div>
      </div>
      <div class="card">
        <div v-for="(item, index) in blogList" :key="index" class="item">
          <vs-card>
            <template #title>
              <h3>{{ item.title }}</h3>
            </template>
            <template #img>
              <img :src="item.baseUrl" />
            </template>
            <template #text>
              <p>{{ item.summary }}</p>
            </template>
            <template #interactions>
              <vs-button danger icon @click="onLike(item)">
                <i
                  class="bx"
                  :class="
                    item.isLike ? 'bxs-heart scale-up-center' : 'bx-heart'
                  "
                ></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> {{ item.likeSum }} </span>
              </vs-button>
            </template>
          </vs-card>
        </div>
      </div>
    </div>
    <div>
      <div class="info">
        <vs-card>
          <template #img>
            <img
              class="Avatar"
              src="http://g.auroraone.top/image/name.png"
              alt=""
            />
          </template>
          <template #title>
            <h3>萌二社</h3>
          </template>
          <template #text>
            <p>美好的事情，即将发生</p>
          </template>
        </vs-card>
        <vs-card v-for="i in 5" id="list" :key="i" type="3">
          <template #title>
            <h3 class="title">Pot with a plant</h3>
          </template>
          <template #img>
            <img
              src="http://g.auroraone.top/image/3.jpg"
              class="image"
              alt=""
            />
          </template>
          <template #text>
            <p class="text">文章{{ i }}</p>
          </template>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      baseUrl: 'http://g.auroraone.top/image/',
      swiperOption: {
        // 配置说明直接看官网
        loop: true,
        spaceBetween: 30,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      blogList: [
        {
          title: 'Pot with a plant',
          baseUrl: 'http://g.auroraone.top/image/1.jpg',
          summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          isLike: false,
          likeSum: 233,
        },
        {
          title: 'Pot with a plant',
          baseUrl: 'http://g.auroraone.top/image/2.jpg',
          summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          isLike: false,
          likeSum: 2233,
        },
        {
          title: 'Pot with a plant',
          baseUrl: 'http://g.auroraone.top/image/3.jpg',
          summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          isLike: false,
          likeSum: 2333,
        },
        {
          title: 'Pot with a plant',
          baseUrl: 'http://g.auroraone.top/image/4.jpg',
          summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          isLike: false,
          likeSum: 520,
        },
        {
          title: 'Pot with a plant',
          baseUrl: 'http://g.auroraone.top/image/2.jpg',
          summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          isLike: false,
          likeSum: 250,
        },
        {
          title: 'Pot with a plant',
          baseUrl: 'http://g.auroraone.top/image/2.jpg',
          summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          isLike: false,
          likeSum: 502,
        },
      ],
    }
  },
  mounted() {
    // console.log(this.$store.state.app)
  },
  methods: {
    onLike(value) {
      value.isLike = !value.isLike
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
}
.iconColor {
  color: #fff;
}
.container {
  position: relative;
  display: flex;
  width: 1000px;
  margin: 0 auto;
  .info {
    border-radius: 10px;
    position: sticky;
    top: 45px;
    flex: 1;
    .Avatar {
      width: 100%;
      height: 180px;
      object-fit: contain;
    }
  }
  .main {
    width: 700px;
    background: #fafafa;
    .image {
      width: 100%;
      height: 300px;
      object-fit: contain;
      border-radius: 20px;
    }
  }
}
#list {
  margin: 10px 0;
  .image {
    min-width: 80px;
    min-height: 80px;
    width: 100px;
    object-fit: cover;
  }
  .title {
    font-size: 16px;
  }
  .text {
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
    text-overflow: ellipsis;
  }
}
.column {
  height: 50px;
  line-height: 50px;
  background: #fff;
  margin: 10px 15px 20px;
  font-weight: bold;
  border-radius: 20px;
  background: #eceff1;
  .title {
    color: #495057;
    font-size: 20px;
    margin-left: 10px;
  }
}
.carouselImage {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.card {
  display: flex;
  // margin-top: 30px;
  flex-wrap: wrap;
  .item {
    width: 220px;
    margin: 5px;
  }
  img {
    width: 220px;
    height: 155px;
    object-fit: cover;
  }
}
// .ant-carousel {
//   .slick-dots {
//     height: auto;
//   }
//   .slick-slide {
//     img {
//       border: 5px solid #fff;
//       display: block;
//       margin: auto;
//       max-width: 80%;
//     }
//   }
//   .slick-thumb {
//     bottom: -45px;
//     li {
//       width: 60px;
//       height: 45px;
//       img {
//         width: 100%;
//         height: 100%;
//         /* filter: grayscale(100%); */
//       }
//       &.slick-active {
//         img {
//           filter: grayscale(0%);
//         }
//       }
//     }
//   }
// }
</style>
