<%@ page import="com.cabolabs.ehrserver.account.Account" %><%@ page import="com.cabolabs.ehrserver.account.Plan" %>

<div class="form-group ${hasErrors(bean: account, field: 'enabled', 'error')} ">
  <label class="control-label" for="enabled">
    <g:message code="account.attr.enabled" default="Enabled" />
  </label>
  <g:checkBox name="enabled" value="${account?.enabled}" />
</div>

<g:if test="${actionName=='create'||actionName=='save'}">

   <h2><g:message code="account.attr.contact" /></h2>

   <div class="form-group ${hasErrors(bean: account?.contact, field: 'username', 'error')} required">
     <label for="username"><g:message code="user.username.label" default="Username" /><span class="required-indicator">*</span></label>
     <g:textField name="username" required="" value="${account?.contact?.username}" class="form-control" />
   </div>

   <div class="form-group ${hasErrors(bean: account?.contact, field: 'email', 'error')} required">
     <label for="email"><g:message code="user.email.label" default="Email" /><span class="required-indicator">*</span></label>
     <g:textField name="email" required="true" value="${account?.contact?.email}" class="form-control"/>
   </div>

   <h2><g:message code="account.create.organization.title" /></h2>

   <div class="form-group ${hasErrors(bean: organization, field: 'name', 'error')} required">
     <label for="organization"><g:message code="organization.attr.name" default="Organization name" /><span class="required-indicator">*</span></label>
     <g:textField name="organization" required="" value="${organization?.name}" class="form-control" />
   </div>
</g:if>

<g:if test="${actionName=='edit' || actionName=='update'}">

  <h2><g:message code="account.edit.organizations" default="Organizations" /></h2>
  <g:if test="${account.organizations.size()>0}">
    <ul>
      <g:each in="${account.organizations}" var="org">
        <li>${org.name}</li>
      </g:each>
    </ul>
  </g:if>
  <g:else>
    <g:message code="account.edit.noOrganizations" />
  </g:else>

  <h2><g:message code="account.edit.current_plan" default="Current plan" /></h2>

  <div class="form-group">
    <label for="plan_id"><g:message code="account.edit.current_plan" default="Current plan" /></label>
    <br/>
    <g:set var="plan_association" value="${account.activePlan}" />
    <g:if test="${plan_association}">
      ${plan_association.plan.name}
    </g:if>
    <g:else>
      <g:message code="account.edit.noActivePlan" />
    </g:else>
  </div>

  
  <h2><g:message code="account.edit.new_plan" default="New plan" /></h2>
  
  <div class="form-group">
    <label for="plan_id"><g:message code="account.edit.assign_plan" default="Assign plan" /></label>
    <g:select from="${Plan.list()}" name="plan_id"
              optionKey="id" optionValue="name"
				  noSelection="${['':'']}"
              class="form-control"></g:select>
  </div>
  
  <div class="form-group">
    <label for="plan_id"><g:message code="account.edit.plan.plan_date_start" default="From date" /></label>
    <g:textField name="plan_date_start" value="${params.plan_date_start}" class="form-control"/>
  </div>
  
  <script type="text/javascript">
    $(document).ready(function() {
      var _from = $('[name=plan_date_start]');
        
      _from.datetimepicker({
        format: "YYYY-MM-DD", // "yyyy-mm-ddThh:ii:ssZ",
        viewMode: 'years'
      });
    });
  </script>
</g:if>