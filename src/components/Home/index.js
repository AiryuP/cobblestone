import React, { PureComponent } from 'react';
 
import {    Form,Input,Button,Select , Row, Col,Card,Table ,Icon ,Divider,Modal,Radio } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
Form.create();
class Home extends PureComponent {
    constructor( porps ){
        super( porps );
        this.state = {  
             visible: false,
             formLayout: 'horizontal',
             columns:  [{
                title: '编号',
                dataIndex: 'key',
                // sortDirections: ['descend', 'ascend'],
                // sorter: (a, b) => a.key - b.key,
              }, {
                title: '登录名称',
                dataIndex: 'name',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
              }, {
                title: '用户名称',
                dataIndex: 'userName', 
              },{
                  title: '电话',
                  dataIndex: 'phoneNum'
              },{
                title: '用户邮箱',
                dataIndex: 'email'
            },{
                title: '创建时间',
                dataIndex: 'createTime'
            },{
                title: '操作',
                render: (text, record) => (
                    <span>
                      <a href="javascript:;"><Icon style={{ fontSize: 22 }} type="edit" /></a>
                      <Divider type="vertical" />
                      <a href="javascript:;"><Icon style={{ fontSize: 22 }} type="delete" /></a>
                    </span>
                  ),
            }],
        }
    }
    render() {

        const { getFieldDecorator } = this.props.form;
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
          } : null;
   
          const data = [{
            key: '1',
            name: 'pengyu',
            userName: '彭羽',
            phoneNum: '13827372229',
            email:'py@163.com',
            createTime:'2019.01.01 03:40:34',
          }, {
            key: '2',
            name: 'zhangsan',
            userName: '张三',
            phoneNum: '13827372229',
            email:'zs@163.com',
            createTime:'2019.01.01 03:40:34',
          }, {
            key: '3',
            name: 'lxw',
            userName: '李晓伟',
            phoneNum: '13827372229',
            email:'lxv@163.com',
            createTime:'2019.01.01 03:40:34',
          }, {
            key: '4',
            name: 'msm',
            userName: '马少明',
            phoneNum: '13827372229',
            email:'msm@163.com',
            createTime:'2019.01.01 03:40:34',
          },{
              key:'6',
              name:'xm',
              userName:'夏目',
              phoneNum: '13827372229',
              email:'xm@163.com',
              createTime:'2019.01.01 03:40:34',
          }
        ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
          };

        const moreAction = (<div>
            <span title="搜索"><Icon style={{ fontSize: 20,color: '#1890ff', cursor:'pointer' }} type="search" /></span>&nbsp;&nbsp;
            <span title="编辑" onClick={this.showModal}><Icon style={{ fontSize: 20,color: '#1890ff', cursor:'pointer' }} type="edit" /></span>&nbsp;&nbsp;
            <span title="上传"><Icon style={{ fontSize: 20,color: '#1890ff', cursor:'pointer' }} type="upload" /></span>&nbsp;&nbsp;
            <span title="下载"><Icon style={{ fontSize: 20,color: '#1890ff', cursor:'pointer' }} type="download" /></span>&nbsp;&nbsp;
            <span title="删除"><Icon style={{ fontSize: 20,color: '#1890ff', cursor:'pointer' }} type="delete" /></span>&nbsp;&nbsp;
            <span title="菜单"><Icon style={{ fontSize: 20,color: '#1890ff', cursor:'pointer' }} type="appstore" /></span>&nbsp;&nbsp;
        </div> )


        return (
            <div>
                
                <Form layout="inline">

                    <Row gutter={24}>
                        <Col xl={4} lg={8} md={8} sm={8} xs={24}>
                        <FormItem >
                            {getFieldDecorator('loginname', { })(
                                <Input   placeholder="请输入登录名称！" />
                            )}
                        </FormItem>
                        </Col>
                        <Col xl={4} lg={8} md={8} sm={8} xs={24}>
                        <FormItem>
                            {getFieldDecorator('username', { })(
                                <Input  placeholder="请输入用户名称！" />
                            )}
                        </FormItem>
                        </Col>
                        <Col xl={4} lg={8} md={8} sm={8} xs={24}>
                        <FormItem>
                            {getFieldDecorator('sex', { })(
                                <Select style={{ width: 160 }} placeholder="请选择性别" >
                                    <Option value="0">男</Option>
                                    <Option value="1">女</Option>
                                </Select>
                            )}
                        </FormItem>
                        </Col>
                        <Col xl={4} lg={8} md={8} sm={8} xs={24}>
                        <FormItem>
                            {getFieldDecorator('area', { })(
                                <Input  placeholder="请输入用户所在地区！" />
                            )}
                        </FormItem>
                        </Col>
                        <Col xl={4} lg={8} md={8} sm={8} xs={24}>
                        <FormItem>
                            {getFieldDecorator('mechanism', { })(
                                <Input  placeholder="请输入用户所属机构！" />
                            )}
                        </FormItem>
                        </Col>
                        
                        <Button type="primary" style={{   }}  icon="search">查询</Button>
                        &nbsp;&nbsp; 
                        <Button type="primary" style={{  backgroundColor: 'orange',borderColor: 'orange' }}  icon="delete">清空</Button>
   
                    </Row>
                </Form>

                <Card title="用户列表" bordered={ true } extra={ moreAction } style={{  }} >
                    <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={data} onChange={this.onChange} />
               </Card>

               <Modal
                    title="新增用户信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="取消"
                    maskClosable={ false }
                    >
                    
                    <Form layout="horizontal">
                        <Row gutter={24}>
                            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                             
                                <FormItem label="登录名称" {...formItemLayout} >
                                    {getFieldDecorator('loginName', { 
                                        rules: [{
                                            required: true,
                                            message: '请输入登录名称！',
                                          }],
                                    })(
                                        <Input   placeholder="请输入登录名称！" />
                                    )}
                                </FormItem>

                                <FormItem label="登录密码" {...formItemLayout} >
                                    {getFieldDecorator('password', { 
                                        rules: [{
                                            required: true,
                                            message: '请输入登录密码！',
                                          }],
                                    })(
                                        <Input   placeholder="请输入登录密码！" />
                                    )}
                                </FormItem>

                                <FormItem label="用户名称" {...formItemLayout} >
                                    {getFieldDecorator('userName', { 
                                        rules: [{
                                            required: true,
                                            message: '请输入用户名称！',
                                          }],
                                    })(
                                        <Input   placeholder="请输入用户名称！" />
                                    )}
                                </FormItem>

                                <FormItem label="用户性别" {...formItemLayout} >
                                    {getFieldDecorator('sex', { })(
                                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                                            <Radio value={0}>女</Radio>
                                            <Radio value={1}>男</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>

                                <FormItem label="用户电话" {...formItemLayout} >
                                    {getFieldDecorator('phoneNum', { 
                                        rules: [{
                                            required: true,
                                            message: '请输入用户电话！',
                                          }],
                                    })(
                                        <Input   placeholder="请输入用户电话！" />
                                    )}
                                </FormItem>

                                <FormItem label="用户邮箱" {...formItemLayout} >
                                    {getFieldDecorator('email', { 
                                        rules: [{
                                            required: true,
                                            message: '请输入用户邮箱！',
                                          }],
                                    })(
                                        <Input   placeholder="请输入用户邮箱！" />
                                    )}
                                </FormItem>

                                <FormItem label="所属地区" {...formItemLayout} >
                                    {getFieldDecorator('area', { })(
                                        <Input   placeholder="请输入用户所属地区！" />
                                    )}
                                </FormItem>

                                <FormItem label="所属机构" {...formItemLayout} >
                                    {getFieldDecorator('mechanism', { })(
                                        <Input   placeholder="请输入用户所属机构！" />
                                    )}
                                </FormItem>
                                
                             
                            </Col>
                        
                        </Row>
                    </Form>


                </Modal>

            </div>
        );
    }



    onChange = (pagination, filters, sorter) =>{
        console.log('params', pagination, filters, sorter);
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    }


    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
}

const HomeForm =  Form.create({   })(Home);

export default HomeForm;