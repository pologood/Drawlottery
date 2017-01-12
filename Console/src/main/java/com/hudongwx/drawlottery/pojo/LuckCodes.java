package com.hudongwx.drawlottery.pojo;

import javax.persistence.*;

@Table(name = "t_luck_codes")
public class LuckCodes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 幸运号对应模板id
     */
    @Column(name = "lock_code_id")
    private Long lockCodeId;

    /**
     * 商品ID
     */
    @Column(name = "commodity_id")
    private Long commodityId;

    /**
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取幸运号
     *
     * @return lock_code - 幸运号
     */
    public Long getLockCodeId() {
        return lockCodeId;
    }

    /**
     * 设置幸运号
     *
     * @param lockCodeId 幸运号
     */
    public void setLockCodeId(Long lockCodeId) {
        this.lockCodeId = lockCodeId;
    }

    /**
     * 获取商品ID
     *
     * @return commodity_id - 商品ID
     */
    public Long getCommodityId() {
        return commodityId;
    }

    /**
     * 设置商品ID
     *
     * @param commodityId 商品ID
     */
    public void setCommodityId(Long commodityId) {
        this.commodityId = commodityId;
    }
}