package com.hudongwx.drawlottery.web;

import com.github.pagehelper.PageInfo;
import com.hudongwx.drawlottery.common.constants.CommonConstants;
import com.hudongwx.drawlottery.common.dto.Node;
import com.hudongwx.drawlottery.common.dto.paramBody.HistoryParam;
import com.hudongwx.drawlottery.common.dto.response.OrderFilters;
import com.hudongwx.drawlottery.pojo.ExchangeWay;
import com.hudongwx.drawlottery.pojo.History;
import com.hudongwx.drawlottery.service.commodity.ExchangeWayService;
import com.hudongwx.drawlottery.service.history.HistoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * 订单相关 controller 类.
 * Date: 2017/1/18 0018
 * Time: 2:49
 *
 * @author <a href="http://userwu.github.io">wuhongxu</a>.
 * @version 1.0.0
 */
@Api("订单相关接口")
@RestController
@RequestMapping("/order")
public class HistoryController {

    @Resource
    private HistoryService historyService;
    @Resource
    private CommonConstants commonConstants;
    @Resource
    private ExchangeWayService exchangeWayService;

    @ApiOperation("获取订单分页数据")
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    public PageInfo<History> getAll(@ApiParam(defaultValue = "1") @RequestParam(defaultValue = "1") Integer p, @ApiParam() @RequestBody HistoryParam param) {
        return historyService.getHistoryList(p, commonConstants.getMaxPageSize(), param);
    }

    @RequestMapping(value = "/keys", method = RequestMethod.POST)
    public List<String> getKeys(@ApiParam @RequestParam String key) {
        final List<String> roundTimes = historyService.getRoundTimes(1, commonConstants.getMaxPageSize(), key);
        return roundTimes;
    }

    @RequestMapping(value = "/filters", method = RequestMethod.POST)
    public OrderFilters getFilters() {
        OrderFilters filters = new OrderFilters();
        filters.setGenre(commonConstants.createGenres());
        filters.setExchangeState(commonConstants.createExchangeState());
        filters.setCardNotEnough(commonConstants.createCardNotEnough());
        final List<ExchangeWay> all = exchangeWayService.getAll();
        List<Node> exWays = new ArrayList<>();
        for (ExchangeWay exchangeWay : all) {
            exWays.add(new Node(exchangeWay.getName(), exchangeWay.getId()));
        }
        filters.setExchangeWay(exWays);
        return filters;
    }
}