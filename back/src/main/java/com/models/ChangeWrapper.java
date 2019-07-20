package com.models;

public class ChangeWrapper
{
    private String email;
    private String rg;

    public ChangeWrapper() {
        this.email = new String();
        this.cpf = new String();
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}