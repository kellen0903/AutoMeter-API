package com.zoctan.api.service.impl;

import com.zoctan.api.core.service.AbstractService;
import com.zoctan.api.dto.TestplanCase;
import com.zoctan.api.entity.JmeterPerformanceObject;
import com.zoctan.api.mapper.ApicasesMapper;
import com.zoctan.api.service.TestPlanCaseService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;
import java.util.Date;

/**
 * @author Zoctan
 * @date 2020/04/17
 */
@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class TestPlanCaseServiceImpl extends AbstractService<TestplanCase> implements TestPlanCaseService {
    @Resource
    private ApicasesMapper apicaseMapper;


    @Override
    public void ExecuteHttpPerformancePlanCase(JmeterPerformanceObject jmeterPerformanceObject, String DeployName, String JmeterPath, String JmxPath, String JmxCaseName, String JmeterPerformanceReportPath, String JmeterPerformanceReportLogPath, Long Thread, Long Loop,String Creator) throws IOException {
        long SlaverId=jmeterPerformanceObject.getSlaverid();
        long PlanId=jmeterPerformanceObject.getTestplanid();
        long CaseId=jmeterPerformanceObject.getCaseid();
        long BatchId=jmeterPerformanceObject.getBatchid();

        String BatchName=jmeterPerformanceObject.getBatchname();
        String PlanName=jmeterPerformanceObject.getExecuteplanname();
        String CaseName=jmeterPerformanceObject.getCasename();
        String Expect=jmeterPerformanceObject.getExpect().replace(" ","Autometer");;

        String Protocal=jmeterPerformanceObject.getProtocal();
        String RequestmMthod=jmeterPerformanceObject.getRequestmMthod();
        String Casetype=jmeterPerformanceObject.getCasetype();
        String Resource=jmeterPerformanceObject.getResource();
        String Apistyle=jmeterPerformanceObject.getApistyle();
        String Requestcontenttype=jmeterPerformanceObject.getRequestcontenttype();
        String Responecontenttype=jmeterPerformanceObject.getResponecontenttype();
        String Headjson=jmeterPerformanceObject.getHeadjson().replace(" ","Autometer");

        String Paramsjson=jmeterPerformanceObject.getParamsjson().replace(" ","Autometer");
        String Bodyjson=jmeterPerformanceObject.getBodyjson().replace(" ","Autometer");

        String PostData=jmeterPerformanceObject.getPostdata().replace("\t","").replace("\n","").replace(" ","Autometer");
        String VariablesJson=jmeterPerformanceObject.getRadomvariablejson().replace(" ","Autometer");

        String MysqlUrl=jmeterPerformanceObject.getMysqlurl();
        String MysqlUserName=jmeterPerformanceObject.getMysqlusername();
        String MysqlPassword=jmeterPerformanceObject.getMysqlpassword();

        String MachineIP=jmeterPerformanceObject.getMachineip();
        String DeployVisityType=jmeterPerformanceObject.getDeployunitvisittype();


        String CaseReportFolder = JmeterPerformanceReportPath + "/" +SlaverId + "-" + PlanId + "-" + CaseId + "-" + BatchName;
        File dir = new File(CaseReportFolder);
        if (!dir.exists()) {// 判断目录是否存在
            dir.mkdir();
            TestPlanCaseServiceImpl.log.info("创建性能报告目录完成 :" + CaseReportFolder);
        }

        String ReportSlaverLogFolder = JmeterPerformanceReportLogPath + "/" + SlaverId;
        File logdir = new File(ReportSlaverLogFolder);
        if (!logdir.exists()) {// 判断目录是否存在
            logdir.mkdir();
            TestPlanCaseServiceImpl.log.info("创建性能报告SlaverId日志目录完成 :" + ReportSlaverLogFolder);
        }

        String ReportSlaverPlanLogFolder = ReportSlaverLogFolder + "/" + PlanId;
        File slaverplanlogdir = new File(ReportSlaverPlanLogFolder);
        if (!slaverplanlogdir.exists()) {// 判断目录是否存在
            slaverplanlogdir.mkdir();
            TestPlanCaseServiceImpl.log.info("创建性能报告SlaverId-Planid日志目录完成 :" + slaverplanlogdir);
        }

        CaseReportFolder=CaseReportFolder.replace(" ","Autometer");
        ReportSlaverPlanLogFolder=ReportSlaverPlanLogFolder.replace(" ","Autometer");

        String JmeterCmd="";
        String os = System.getProperty("os.name");
        TestPlanCaseServiceImpl.log.info("性能测试当前系统版本是  is :" + os);
        Date current= new Date();
        String jmeterlogfilename=PlanName+"-"+BatchName+"-"+CaseName;
        //Windows操作系统
        if (os != null && os.toLowerCase().startsWith("windows")) {
            JmeterCmd = JmeterPath + "/jmeter.bat -n -t " + JmxPath + "/HttpPerformance.jmx  -Jmysqlurl=" + MysqlUrl + " -Jmysqlusername=" + MysqlUserName+ " -Jmachineip=" + MachineIP+ " -Jdeployvisitytype=" + DeployVisityType + " -Jmysqlpassword="
                    + MysqlPassword + " -Jthread=" + Thread + " -Jloops=" + Loop + " -Jtestplanid=" + PlanId + " -Jcaseid=" + CaseId + " -Jslaverid=" + SlaverId + " -Jbatchid=" + BatchId + " -Jbatchname=" + BatchName +
                    " -Jexecuteplanname=" + PlanName +" -Jcasename=" + CaseName+" -Jexpect=" + Expect+" -Jprotocal=" + Protocal+" -JRequestmMthod=" + RequestmMthod+" -Jcasetype=" + Casetype+" -Jresource=" + Resource+" -Jcreator=" + Creator+
                    " -Japistyle=" + Apistyle +" -Jrequestcontenttype=" + Requestcontenttype +" -Jresponecontenttype=" + Responecontenttype +" -Jheadjson="  + Headjson  +" -Jparamsjson=" + Paramsjson+" -Jpostdata=" + PostData +" -Jbodyjson=" + Bodyjson +" -Jvariablesjson="+VariablesJson+
                    " -Jtestdeployunit=" + DeployName + " -Jreportlogfolder=" + ReportSlaverPlanLogFolder + " -Jcasereportfolder=" + CaseReportFolder + " -Jtestclass=" + JmxCaseName + " -l  " + CaseReportFolder + "/" + CaseId + ".jtl -e -o " + CaseReportFolder+ " -j jmeter-pt"+jmeterlogfilename+".log ";
        }else
        {
            JmeterCmd = JmeterPath + "/jmeter -n -t " + JmxPath + "/HttpPerformance.jmx  -Jmysqlurl=" + MysqlUrl + " -Jmysqlusername=" + MysqlUserName+ " -Jmachineip=" + MachineIP+ " -Jdeployvisitytype=" + DeployVisityType + " -Jmysqlpassword="
                    + MysqlPassword + " -Jthread=" + Thread + " -Jloops=" + Loop + " -Jtestplanid=" + PlanId + " -Jcaseid=" + CaseId + " -Jslaverid=" + SlaverId + " -Jbatchid=" + BatchId + " -Jbatchname=" + BatchName +
                    " -Jexecuteplanname=" + PlanName +" -Jcasename=" + CaseName+" -Jexpect=" + Expect+" -Jprotocal=" + Protocal+" -JRequestmMthod=" + RequestmMthod+" -Jcasetype=" + Casetype+" -Jresource=" + Resource+" -Jcreator=" + Creator+
                    " -Japistyle=" + Apistyle +" -Jrequestcontenttype=" + Requestcontenttype +" -Jresponecontenttype=" + Responecontenttype +" -Jheadjson="  + Headjson  +" -Jparamsjson=" + Paramsjson+" -Jpostdata=" + PostData +" -Jbodyjson=" + Bodyjson +" -Jvariablesjson="+VariablesJson+
                    " -Jtestdeployunit=" + DeployName + " -Jreportlogfolder=" + ReportSlaverPlanLogFolder + " -Jcasereportfolder=" + CaseReportFolder + " -Jtestclass=" + JmxCaseName + " -l  " + CaseReportFolder + "/" + CaseId + ".jtl -e -o " + CaseReportFolder+ " -j jmeter-pt"+jmeterlogfilename+".log ";
        }

        TestPlanCaseServiceImpl.log.info("性能JmeterCmd is :" + JmeterCmd);
        ExecShell(JmeterCmd);
        TestPlanCaseServiceImpl.log.info("性能JmeterCmd finish。。。。。。。。。。。。。。。。。。。。。。。。。。。。。 :");
    }


    @Override
    public void ExecuteHttpPlanFunctionCase(Long Slaverid, String JmeterPath, String JmxPath, String DispatchIds, String MysqlUrl, String MysqlUserName, String MysqlPassword,int JmeterLogFileNum) throws IOException {
        String JmeterCmd="";
        String os = System.getProperty("os.name");
        TestPlanCaseServiceImpl.log.info("功能测试当前系统版本是  is :" + os);
        //Windows操作系统
        if (os != null && os.toLowerCase().startsWith("windows")) {
            JmeterCmd = JmeterPath + "\\jmeter.bat -n -t " + JmxPath + "\\HTTPFunction.jmx -Jmysqlurl=" + MysqlUrl + " -Jmysqlusername=" + MysqlUserName + " -Jmysqlpassword=" + MysqlPassword + " -Jthread=1 -Jloops=1 -JDispatchIds=" + DispatchIds+" -JSlaverid="+Slaverid+ " -j jmeter-ft"+JmeterLogFileNum+".log ";
        } else
        {
            JmeterCmd = JmeterPath + "/jmeter -n -t " + JmxPath + "/HTTPFunction.jmx -Jmysqlurl=" + MysqlUrl + " -Jmysqlusername=" + MysqlUserName + " -Jmysqlpassword=" + MysqlPassword + " -Jthread=1 -Jloops=1 -JDispatchIds=" + DispatchIds+" -JSlaverid="+Slaverid+ " -j jmeter-ft"+JmeterLogFileNum+".log ";
        }
        TestPlanCaseServiceImpl.log.info("功能JmeterCmd  is :" + JmeterCmd);
        ExecShell(JmeterCmd);
        TestPlanCaseServiceImpl.log.info("功能JmeterCmd finish。。。。。。。。。。。。。。。。。。。。。。。。。。。。。 :");
    }

    public void ExecShell(String ShellCmd) throws IOException {
        Process pro = Runtime.getRuntime().exec(ShellCmd);
//        try {
//            Process pro = Runtime.getRuntime().exec(ShellCmd);
//        } catch (Exception e) {
//            // TODO Auto-generated catch block
//            TestPlanCaseServiceImpl.log.info("调用Jmeter命令异常: " + e.getMessage()+" ShellCmd is:"+ShellCmd);
//        }
    }
}


