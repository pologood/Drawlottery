package com.hudongwx.drawlottery.mobile.web.commodity;

import com.alibaba.fastjson.JSONObject;
import com.hudongwx.drawlottery.mobile.entitys.CommodityHistory;
import com.hudongwx.drawlottery.mobile.web.BaseController;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * 开发公司：hudongwx.com<br/>
 * 版权：294786949@qq.com<br/>
 * <p>
 *
 * @author wu
 * @version 1.0, 2016/12/22 0016 <br/>
 * @desc <p>
 * <p>
 * 创建　wu　2016/12/22 0016　<br/>
 * <p>
 * 用户收货地址
 * <p>
 * @email 294786949@qq.com
 */
@RestController
@Api(value = "CommodityHistoryController", description = "商品历史信息管理")
public class CommodityHistoryController extends BaseController {

    /**
     * 查看商品历史
     *
     * @param accountid 用户账号
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/commodityhistory/show", method = RequestMethod.POST)
    public JSONObject queryCommodityHistoryInfo(@RequestParam("acc") Long accountid) {
        List<CommodityHistory> chlist = new ArrayList<>();// TODO: 2016/12/24 查询用户购买的商品 参数(Long accountid)
        return success(chlist);
    }

    /**
     * 用户删除商品历史信息
     *
     * @param accountid      账号
     * @param commodityarray 历史商品ids数组
     * @return JSONObject
     */
    @ResponseBody
    @RequestMapping(value = "/commodityhistory/del", method = RequestMethod.POST)
    public JSONObject deleteCommodityHistoryInfo(@RequestParam("acc") Long accountid, @RequestParam("array") Long[] commodityarray) {
        boolean status = true;// TODO: 2016/12/24 用户刪除商品历史信息 参数(Long accountid,Long[] commodityarray)
        return response(status);
    }
}
