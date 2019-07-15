<template>
  <!-- 安监 -->
  <div class="safetySupervision">
    <div v-for="(item, index) in safetySupervisionData" :key="index">
      <m-title :gettitle="item.settitle"></m-title>
      <ve-bar :data="item.chartData" :settings="item.chartSettings"></ve-bar>
    </div>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,index) in list" :key="index">
        <div class="fx">
          <span class="list">{{item.company}}</span>
          <span class="grade">{{item.standRank}}</span>
          <span class="tate">{{item.standDate}}</span>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    this.chartSettings1 = {
      legendName: {
        key: "企业数量"
      }
    };

    this.chartSettings2 = {
      legendName: {
        key: "企业数量"
      }
    };

    this.chartSettings3 = {
      legendName: {
        key: "企业数量"
      }
    };
    return {
      safetySupervisionData: [
        {
          settitle: "专项监管行业分析",
          chartSettings: {
            legendName: {
              key: "企业数量"
            }
          },
          chartData: {
            columns: ["监管行业名称", "企业数量"],
            rows: []
          }
        },
        {
          settitle: "危险化工工艺统计",
          chartSettings: {
            legendName: {
              key: "企业数量"
            }
          },
          chartData: {
            columns: ["危险化工工艺名称", "企业数量"],
            rows: []
          }
        },
        {
          settitle: "重大危险源等级",
          chartSettings: {
            legendName: {
              key: "企业数量"
            }
          },
          chartData: {
            columns: ["重大危险源等级", "企业数量"],
            rows: []
          }
        },
        {
          settitle: "重点监管危化品统计",
          chartSettings: {
            legendName: {
              key: "企业数量"
            }
          },
          chartData: {
            columns: ["重点监管危化品名称", "企业数量"],
            rows: []
          }
        },
        {
          settitle: "剧毒品生产使用统计",
          chartSettings: {
            legendName: {
              key: "企业数量"
            }
          },
          chartData: {
            columns: ["剧毒品名称", "企业数量"],
            rows: []
          }
        },
        {
          settitle: "专项监管行业分析",
          chartSettings: {
            legendName: {
              key: "企业数量"
            }
          },
          chartData: {
            columns: ["标准化等级", "企业数量"],
            rows: []
          }
        }
      ],
      list: [
        // { name: "aaa公司", grade: "二级", tate: "2016.23" },
        // { name: "shamt公司", grade: "二级", tate: "1126.23" },
        // { name: "非主流公司", grade: "二级", tate: "6231.23" }
      ],
      loading: false,
      finished: false
    };
  },
  created() {
    api.getAnalysisRegulatorytype().then(res => {
      res.data.analysisList.map((item, index) => {
        this.safetySupervisionData[0].chartData.rows.push({
          监管行业名称: item.VALUE,
          企业数量: item.COUNTREG
        });
      });
    });

    api.getAnalysiTec().then(res => {
      res.data.analysisList.selectData.map((item, index) => {
        this.safetySupervisionData[1].chartData.rows.push({
          危险化工工艺名称: item.value,
          企业数量: item.key
        });
      });
    });

    api.getAnalysisHazLevel().then(res => {
      res.data.analysisList.seriesData.map((item, index) => {
        this.safetySupervisionData[2].chartData.rows.push({
          重大危险源等级: item.name,
          企业数量: item.value
        });
      });
    });

    api.getAnalysisChem().then(res => {
      res.data.analysisList.seriesData.map((item, index) => {
        this.safetySupervisionData[3].chartData.rows.push({
          重点监管危化品名称: item.name,
          企业数量: item.key
        });
      });
    });

    api.getAnalysisHyp().then(res => {
      res.data.analysisList.seriesData.map((item, index) => {
        this.safetySupervisionData[4].chartData.rows.push({
          剧毒品名称: item.name,
          企业数量: item.key
        });
      });
    });

    api.getAnalysisStandRank().then(res => {
      // console.log(res);
      res.data.analysisList.seriesData.map((item, index) => {
        this.safetySupervisionData[5].chartData.rows.push({
          标准化等级: item.name,
          企业数量: item.value
        });
      });
    });
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          api.getList(10, i).then(res => {
            console.log(res);
            res.data.page.list.map((item, index) => {
              this.list.push({
                company: item.company,
                standRank: item.standRank,
                standDate: item.standDate
              });
            });
          });
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 2) {
          this.finished = true;
        }
      }, 500);

      // 内容的总长度
      // 总页数
      //
    }
  }
};
</script>

<style lang='scss'>
.fx {
  display: flex;
}
.safetySupervision {
  .list {
    flex: 1;
    font-size:.28rem;
  }
  .grade {
    width: 1rem;
    font-size:.28rem;

  }
  .tate {
    width: 1.5rem;
    font-size:.28rem;

  }

}
</style>