package com.models;

public class ChangeWrapper
{
    private String email;
    private String cpf;

    public ChangeWrapper() {
        this.email = new String();
        this.cpf = new String();
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}