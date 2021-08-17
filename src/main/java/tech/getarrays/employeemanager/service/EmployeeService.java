package tech.getarrays.employeemanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.exception.UserNotFoundException;
import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repo.EmployeeRepo;

import java.util.List;
import java.util.UUID;

/**
 * Here we are going to define all necessary functionality like(add the employee, delete employee etc..) for our application.
 * @Service: setup all this functionality
 * @Autowired: allow us to use all functions for the CRUD operation.
 */


@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    //GET
    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    //ADD
    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    //UPDATE
    public Employee updateEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    //DELETE
    public void deleteEmployee(Long id) {
        employeeRepo.deleteEmployeeById(id);
    }


    public Employee findEmployeeById(Long id) {
        return employeeRepo.findEmployeeById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }
}
