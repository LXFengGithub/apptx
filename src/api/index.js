import axios from '@/axios.js'
import qs from 'qs';
var api = {
  getAnalysiTec() { // 危险化工工艺统计 
    return axios.post('anjian/safBaseInfo/analysiTec')
  },
  getAnalysisRegulatorytype() { // 专项监管行业分析
    return axios.post('anjian/safBaseInfo/analysisRegulatorytype')
  },
  getAnalysisHazLevel() { // 重大危险源等级数量分析
    return axios.post('anjian/safBaseInfo/analysisHazLevel')
  },
  getAnalysisChem() { // 重点监管危化品
    return axios.post('anjian/safBaseInfo/analysisChem')
  },
  getAnalysisHyp() { // 剧毒品企业分析
    return axios.post('anjian/hypertoxic/analysisHyp')
  },
  getAnalysisStandRank() { // 标准化等级到期分析
    return axios.post('anjian/safBaseInfo/analysisStandRank')
  },
  getList(limit, page) { // 到期分析
    return axios.post('anjian/safBaseInfo/list', qs.stringify({
      "limit": limit,
      "page": page
    }))
  },
}

export default api
