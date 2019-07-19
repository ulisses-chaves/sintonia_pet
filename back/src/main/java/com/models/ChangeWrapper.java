package com.models;

public class ChangeWrapper
{
    private String email;
    private String login;

    public ChangeWrapper() {
        this.email = new String();
        this.login = new String();
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}